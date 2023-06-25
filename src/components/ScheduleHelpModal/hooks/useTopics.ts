import { useEffect, useMemo, useState } from 'react';
import useGetTopicsRequest from '../../../service/requests/useGetTopicsRequest';
import { useSnackBar } from '../../../utils/renderSnackBar';
import { TTopicValue } from '../types';

const useTopics = () => {
  const { showErrorSnackBar } = useSnackBar();

  const {
    response,
    error,
    getTopics,
    isLoading: isLoadingTopics,
  } = useGetTopicsRequest();

  const [topicInputValue, setTopicInputValue] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<TTopicValue | null>(null);

  const formatScheduleTopicName = (name: string): string => {
    return name
      .trim()
      .split(/\s+/)
      .map((word) => {
        let formatedString: string = word.charAt(0).toUpperCase();

        for (let i = 1; i < word.length; i++) {
          if (word[i - 1] == '-')
            formatedString = formatedString + word[i].toUpperCase();
          else formatedString = formatedString + word[i].toLowerCase();
        }

        return formatedString;
      })
      .join(' ');
  };

  const options: TTopicValue[] = useMemo(() => {
    if (!response) return [];

    if (!response.data.length) {
      const formatedInputValue = formatScheduleTopicName(topicInputValue);

      const auxiliarTopicValue: TTopicValue = {
        isNew: true,
        inputValue: formatedInputValue,
        label: `Adicionar assunto "${formatedInputValue}"`,
      };

      return [auxiliarTopicValue];
    }

    return response.data.map((topic) => ({
      id: topic.id,
      isNew: false,
      inputValue: topic.name,
      label: topic.name,
    }));
  }, [response]);

  const handleChangeTopicInput = (
    event: React.SyntheticEvent<Element, Event>,
    newTopicInputValue: string
  ) => {
    setTopicInputValue(newTopicInputValue);
  };

  const handleChangeTopicValue = (
    event: React.SyntheticEvent<Element, Event>,
    newTopicValue: TTopicValue | null
  ) => {
    if (newTopicValue && newTopicValue.isNew) {
      setSelectedTopic({
        ...newTopicValue,
        label: newTopicValue.inputValue,
      });
      return;
    }

    setSelectedTopic(newTopicValue);
  };

  const resetStates = () => {
    setTopicInputValue(``);
    setSelectedTopic(null);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      void getTopics({ name: topicInputValue });
    }, 1000);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [topicInputValue]);

  useEffect(() => {
    if (!error) return;

    showErrorSnackBar(`Erro ao requisitar topicos: ${error}`);
  }, [error]);

  return {
    selectedTopic,
    options,
    topicInputValue,
    isLoadingTopics,
    handleChangeTopicInput,
    handleChangeTopicValue,
    resetStates,
  };
};

export default useTopics;
