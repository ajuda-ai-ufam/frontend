import { useEffect, useMemo, useRef } from 'react';
import useGetUserInfoRequest from '../../../service/requests/useGetUserInfoRequest/index';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { TypeUserEnum } from '../../../utils/constants';
import { useSnackBar } from '../../../utils/renderSnackBar';
const useEditProfile = () => {
  const user = useGetLoggedUser();

  const { showErrorSnackBar } = useSnackBar();

  const { data: userInfo, error, getInfo, isLoading } = useGetUserInfoRequest();

  const nameRef = useRef<HTMLInputElement | undefined>(undefined);
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const enrollmentRef = useRef<HTMLInputElement>();
  const courseRef = useRef<HTMLInputElement>();
  const descriptionRef = useRef<HTMLInputElement>();
  const contactEmailRef = useRef<HTMLInputElement>();
  const linkedinRef = useRef<HTMLInputElement>();
  const whatsappRef = useRef<HTMLInputElement>();

  const isStudent = useMemo(
    () => user?.type_user_id === TypeUserEnum.STUDENT,
    [user]
  );

  //TODO: Mudar a pagina para o formato de edicao
  const handleEditProfileClick = () => {
    return;
  };

  const fillFormInputsWithUserInfo = () => {
    if (userInfo) {
      if (nameRef.current) nameRef.current.value = userInfo.name;

      if (emailRef.current) emailRef.current.value = userInfo.email;

      if (enrollmentRef.current)
        enrollmentRef.current.value = userInfo.enrollment;

      if (courseRef.current) courseRef.current.value = userInfo.course.name;

      if (descriptionRef.current)
        descriptionRef.current.value = userInfo.description;

      if (contactEmailRef.current)
        contactEmailRef.current.value = userInfo.contact_email;

      if (linkedinRef.current) linkedinRef.current.value = userInfo.linkedin;

      if (whatsappRef.current) whatsappRef.current.value = userInfo.whatsapp;

      if (passwordRef.current) passwordRef.current.value = 'SenhaExemplo';
    }
  };

  useEffect(() => {
    document.title = 'Meu Perfil';
    void getInfo();
  }, []);

  useEffect(() => {
    if (!userInfo) return;

    fillFormInputsWithUserInfo();
  }, [userInfo]);

  useEffect(() => {
    if (!error) return;

    showErrorSnackBar(`Erro ao carregar as informações do usuário: ${error}`);
  }, [error]);

  return {
    isStudent,
    nameRef,
    emailRef,
    passwordRef,
    enrollmentRef,
    courseRef,
    descriptionRef,
    contactEmailRef,
    linkedinRef,
    whatsappRef,
    isLoading,
    handleEditProfileClick,
  };
};

export default useEditProfile;
