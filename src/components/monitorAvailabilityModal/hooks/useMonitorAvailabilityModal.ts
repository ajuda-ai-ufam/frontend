import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useMonitorAvailabilityRequest from '../../../service/requests/useMonitorAvailabilityRequest';
import useGetLoggedUser from '../../../service/storage/getLoggedUser';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { TAvailability } from '../../../service/requests/useMonitorAvailabilityRequest/types';
import { SelectChangeEvent } from '@mui/material';

const useMonitorAvailabilityModal = () => {
  const navigate = useNavigate();
  const user = useGetLoggedUser();
  const { showErrorSnackBar } = useSnackBar();

  const { isSuccess, isLoading, monitorAvailability, error, resetStates } =
    useMonitorAvailabilityRequest();
  const [isOpen, setIsOpen] = useState(false);

  const [sameHour, setSameHour] = useState(false);
  const [segundaSelected, setSegunda] = useState(false);
  const [tercaSelected, setTerca] = useState(false);
  const [quartaSelected, setQuarta] = useState(false);
  const [quintaSelected, setQuinta] = useState(false);
  const [sextaSelected, setSexta] = useState(false);
  const [sabadoSelected, setSabado] = useState(false);
  const [domingoSelected, setDomingo] = useState(false);

  const [segundaHourDe, setSegundaHourDe] = useState('de');
  const [segundaHourAte, setSegundaHourAte] = useState('até');

  const [tercaHourDe, setTercaHourDe] = useState('de');
  const [tercaHourAte, setTercaHourAte] = useState('até');

  const [quartaHourDe, setQuartaHourDe] = useState('de');
  const [quartaHourAte, setQuartaHourAte] = useState('até');

  const [quintaHourDe, setQuintaHourDe] = useState('de');
  const [quintaHourAte, setQuintaHourAte] = useState('até');

  const [sextaHourDe, setSextaHourDe] = useState('de');
  const [sextaHourAte, setSextaHourAte] = useState('até');

  const [sabadoHourDe, setSabadoHourDe] = useState('de');
  const [sabadoHourAte, setSabadoHourAte] = useState('até');

  const [domingoHourDe, setDomingoHourDe] = useState('de');
  const [domingoHourAte, setDomingoHourAte] = useState('até');

  const [sameHourDe, setSameHourDe] = useState('de');
  const [sameHourAte, setSameHourAte] = useState('até');

  const days = [
    [segundaSelected, segundaHourDe, segundaHourAte],
    [tercaSelected, tercaHourDe, tercaHourAte],
    [quartaSelected, quartaHourDe, quartaHourAte],
    [quintaSelected, quintaHourDe, segundaHourAte],
    [sextaSelected, sextaHourDe, sextaHourAte],
    [sabadoSelected, sabadoHourDe, sabadoHourAte],
    [domingoSelected, domingoHourDe, domingoHourAte],
  ];

  const availability: TAvailability[] = useMemo(() => {
    let newAvailability: TAvailability[] = [];
    for (let i = 0; i < days.length; i++) {
      if (days[i][0] === true) {
        sameHour
          ? (newAvailability = [
              ...newAvailability,
              {
                weekDay: i,
                hours: [{ start: sameHourDe, end: sameHourAte }],
              },
            ])
          : (newAvailability = [
              ...newAvailability,
              {
                weekDay: i,
                hours: [{ start: String(days[i][1]), end: String(days[i][2]) }],
              },
            ]);
      }
    }
    return newAvailability;
  }, [days]);

  const handleCloseModal = () => {
    setIsOpen(false);
    resetStates();

    if (isSuccess) navigate(0);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSameHour(event.target.checked);
  };

  const handleDaySelect = (day: number) => {
    switch (day) {
      case 0:
        setSegunda(!segundaSelected);
        break;
      case 1:
        setTerca(!tercaSelected);
        break;
      case 2:
        setQuarta(!quartaSelected);
        break;
      case 3:
        setQuinta(!quintaSelected);
        break;
      case 4:
        setSexta(!sextaSelected);
        break;
      case 5:
        setSabado(!sabadoSelected);
        break;
      case 6:
        setDomingo(!domingoSelected);
        break;
    }
  };

  const handleSegundaHourDe = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setSegundaHourDe(value);
  };

  const handleSegundaHourAte = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setSegundaHourAte(value);
  };

  const handleTercaHourDe = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setTercaHourDe(value);
  };
  const handleTercaHourAte = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setTercaHourAte(value);
  };

  const handleQuartaHourDe = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setQuartaHourDe(value);
  };
  const handleQuartaHourAte = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setQuartaHourAte(value);
  };

  const handleQuintaHourDe = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setQuintaHourDe(value);
  };
  const handleQuintaHourAte = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setQuintaHourAte(value);
  };

  const handleSextaHourDe = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setSextaHourDe(value);
  };
  const handleSextaHourAte = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setSextaHourAte(value);
  };

  const handleSabadoHourDe = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setSabadoHourDe(value);
  };
  const handleSabadoHourAte = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setSabadoHourAte(value);
  };

  const handleDomingoHourDe = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setDomingoHourDe(value);
  };
  const handleDomingoHourAte = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setDomingoHourAte(value);
  };

  const handleSameHourDe = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setSameHourDe(value);
  };
  const handleSameHourAte = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setSameHourAte(value);
  };

  const handleSaveAvailability = () => {
    monitorAvailability(availability);
  };

  useEffect(() => {
    if (error) {
      showErrorSnackBar(`Erro desconhecido. Erro: ${error}`);
    }
  }, [error]);

  return {
    isLoading,
    isSuccess,
    isOpen,
    sameHour,
    segundaSelected,
    tercaSelected,
    quartaSelected,
    quintaSelected,
    sextaSelected,
    sabadoSelected,
    domingoSelected,
    segundaHourDe,
    tercaHourDe,
    quartaHourDe,
    quintaHourDe,
    sextaHourDe,
    sabadoHourDe,
    domingoHourDe,
    sameHourDe,
    segundaHourAte,
    tercaHourAte,
    quartaHourAte,
    quintaHourAte,
    sextaHourAte,
    sabadoHourAte,
    domingoHourAte,
    sameHourAte,
    handleCloseModal,
    handleOpenModal,
    handleSwitchChange,
    handleDaySelect,
    handleSegundaHourDe,
    handleTercaHourDe,
    handleQuartaHourDe,
    handleQuintaHourDe,
    handleSextaHourDe,
    handleSabadoHourDe,
    handleDomingoHourDe,
    handleSegundaHourAte,
    handleTercaHourAte,
    handleQuartaHourAte,
    handleQuintaHourAte,
    handleSextaHourAte,
    handleSabadoHourAte,
    handleDomingoHourAte,
    handleSameHourDe,
    handleSameHourAte,
    handleSaveAvailability,
  };
};

export default useMonitorAvailabilityModal;
