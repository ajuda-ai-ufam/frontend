import { SelectChangeEvent } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import useCourseRequest from '../../../service/requests/useCourseRequest';
import useGetUserInfoRequest from '../../../service/requests/useGetUserInfoRequest/index';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { TypeUserEnum } from '../../../utils/constants';
import { useSnackBar } from '../../../utils/renderSnackBar';
import {
  validateConfirmPassword,
  validateEnrollment,
  validateMandatoryContactEmail,
  validateName,
  validatePassword,
} from '../../../utils/validateFields';
import useUpdateUserRequest from '../../../service/requests/useUpdateUserRequest';
import { TUpdateUserRequestBody } from '../../../service/requests/useUpdateUserRequest/types';
const useEditProfile = () => {
  const user = useGetLoggedUser();

  const { showErrorSnackBar, showSuccessSnackBar } = useSnackBar();

  const {
    data: userInfo,
    error: getUserError,
    getInfo,
    isLoading: isLoadingUser,
  } = useGetUserInfoRequest();

  const {
    coursesFetch,
    data: courses,
    error: courseFetchError,
    isLoading: isLoadingCourses,
  } = useCourseRequest();

  const {
    updateUser,
    error: errorUpdateUser,
    isLoading: isLoadingUpdateUser,
    isSuccess: isSuccessUpdateUser,
    resetStates,
  } = useUpdateUserRequest();

  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const newPasswordRef = useRef<HTMLInputElement>();
  const confirmNewPasswordRef = useRef<HTMLInputElement>();
  const enrollmentRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLInputElement>();
  const contactEmailRef = useRef<HTMLInputElement>();
  const linkedinRef = useRef<HTMLInputElement>();
  const whatsappRef = useRef<HTMLInputElement>();

  const [course, setCourse] = useState<string>('');
  const [isEditModeDisabled, setIsEditModeDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [nameError, setNameError] = useState('');
  const [contactEmailError, setContactEmailError] = useState('');
  const [enrollmentError, setEnrollmentError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isStudent = useMemo(
    () => user?.type_user_id === TypeUserEnum.STUDENT,
    [user]
  );

  const editProfileTitle = useMemo(
    () => (isEditModeDisabled ? 'Meu Perfil' : 'Editar Perfil'),
    [isEditModeDisabled]
  );

  const handleSaveClick = () => {
    setNameError('');
    setContactEmailError('');
    setPasswordError('');
    setEnrollmentError('');

    let currentErrorName;
    let currentErrorContactEmail;
    let currentErrorEnrollment;
    let currentErrorConfirmPassword;
    let currentErrorPassword;

    if (nameRef.current) {
      currentErrorName = validateName(nameRef.current?.value);
      if (currentErrorName) {
        setNameError(currentErrorName);
      }
    }

    if (contactEmailRef.current) {
      currentErrorContactEmail = validateMandatoryContactEmail(
        contactEmailRef.current.value
      );
      if (currentErrorContactEmail) {
        setContactEmailError(currentErrorContactEmail);
      }
    }

    if (enrollmentRef.current) {
      currentErrorEnrollment = validateEnrollment(enrollmentRef.current?.value);
      if (currentErrorEnrollment) {
        setEnrollmentError(currentErrorEnrollment);
      }
    }

    if (
      newPasswordRef.current &&
      confirmNewPasswordRef.current &&
      (newPasswordRef.current.value || confirmNewPasswordRef.current.value)
    ) {
      currentErrorConfirmPassword = validateConfirmPassword(
        newPasswordRef.current.value,
        confirmNewPasswordRef.current.value
      );

      currentErrorPassword = validatePassword(
        userInfo?.name || '',
        newPasswordRef.current.value
      );

      if (currentErrorConfirmPassword) {
        setPasswordError(currentErrorConfirmPassword);
      }

      if (!currentErrorConfirmPassword && currentErrorPassword) {
        setPasswordError(currentErrorPassword);
      }
    }

    if (
      !currentErrorName &&
      !currentErrorContactEmail &&
      !currentErrorEnrollment &&
      !currentErrorConfirmPassword &&
      !currentErrorPassword
    ) {
      const user: TUpdateUserRequestBody = {
        name: nameRef.current?.value || '',
        enrollment: enrollmentRef.current?.value || '',
      };

      if (contactEmailRef.current?.value) {
        user.contactEmail = contactEmailRef.current?.value;
      }

      if (newPasswordRef.current?.value)
        user.password = newPasswordRef.current?.value;

      if (passwordRef.current?.value)
        user.oldPassword = passwordRef.current?.value;

      if (descriptionRef.current?.value)
        user.description = descriptionRef.current?.value;

      const courseId = courses.find((crs) => crs.name === course)?.id;
      if (userInfo?.course.id !== courseId) {
        user.courseId = courseId;
      }

      if (whatsappRef.current?.value)
        user.whatsapp = whatsappRef.current?.value;

      if (linkedinRef.current?.value)
        user.linkedin = linkedinRef.current?.value;

      void updateUser(user);
    }
  };

  const handleEditProfileClick = () => {
    setIsEditModeDisabled(false);

    if (passwordRef.current) passwordRef.current.value = '';
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCancelClick = () => {
    setIsEditModeDisabled(true);
    setShowPassword(false);
    setNameError('');
    setContactEmailError('');
    setPasswordError('');
    setEnrollmentError('');
    fillFormInputsWithUserInfo();
  };

  const handleCourseChange = (e: SelectChangeEvent<unknown>) => {
    setCourse(e.target.value as string);
  };

  const fillFormInputsWithUserInfo = () => {
    if (userInfo) {
      if (nameRef.current) nameRef.current.value = userInfo.name;

      if (emailRef.current) emailRef.current.value = userInfo.email;

      if (enrollmentRef.current)
        enrollmentRef.current.value = userInfo.enrollment;

      if (descriptionRef.current)
        descriptionRef.current.value = userInfo.description;

      if (contactEmailRef.current)
        contactEmailRef.current.value = userInfo.contact_email;

      if (linkedinRef.current) linkedinRef.current.value = userInfo.linkedin;

      if (whatsappRef.current) whatsappRef.current.value = userInfo.whatsapp;

      if (passwordRef.current) passwordRef.current.value = 'SenhaExemplo';

      if (newPasswordRef.current) newPasswordRef.current.value = '';

      if (confirmNewPasswordRef.current)
        confirmNewPasswordRef.current.value = '';

      setCourse(userInfo.course.name);
    }
  };

  useEffect(() => {
    document.title = 'Meu Perfil';
    void getInfo();
    void coursesFetch();
  }, []);

  useEffect(() => {
    if (!isSuccessUpdateUser || !userInfo) return;

    resetStates();
    handleCancelClick();
  }, [isSuccessUpdateUser, userInfo]);

  useEffect(() => {
    if (!isSuccessUpdateUser) return;

    showSuccessSnackBar('Alterações salvas');
    void getInfo();
  }, [isSuccessUpdateUser]);

  useEffect(() => {
    if (!userInfo) return;

    fillFormInputsWithUserInfo();
  }, [userInfo, courses]);

  useEffect(() => {
    if (!errorUpdateUser) return;

    showErrorSnackBar(
      `Não foi possível salvar suas alterações, tente novamente mais tarde. Erro: ${errorUpdateUser}`
    );
    resetStates();
  }, [errorUpdateUser]);

  useEffect(() => {
    if (!getUserError) return;

    showErrorSnackBar(
      `Erro ao carregar as informações do usuário: ${getUserError}`
    );
  }, [getUserError]);

  useEffect(() => {
    if (!courseFetchError) return;

    showErrorSnackBar(
      `Erro ao carregar as informações do cursos: ${courseFetchError}`
    );
  }, [courseFetchError]);

  return {
    editProfileTitle,
    nameRef,
    emailRef,
    passwordRef,
    newPasswordRef,
    confirmNewPasswordRef,
    enrollmentRef,
    descriptionRef,
    contactEmailRef,
    linkedinRef,
    whatsappRef,
    showPassword,
    course,
    courses,
    contactEmailError,
    enrollmentError,
    passwordError,
    nameError,
    isEditModeDisabled,
    isStudent,
    isLoading: isLoadingUser,
    isLoadingCourses,
    isLoadingUpdateUser,
    handleEditProfileClick,
    handleCancelClick,
    handleCourseChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleSaveClick,
  };
};

export default useEditProfile;
