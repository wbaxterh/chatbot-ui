import { IconExternalLink } from '@tabler/icons-react';
import { useContext } from 'react';

import { useTranslation } from 'next-i18next';

import { OpenAIModel } from '@/types/openai';

import HomeContext from '@/pages/api/home/home.context';

export const ModelSelect = () => {
  const { t } = useTranslation('chat');

  const {
    state: { selectedConversation, models, defaultModelId },
    handleUpdateConversation,
    dispatch: homeDispatch,
  } = useContext(HomeContext);
  // Filter out to only include the GPT-3.5 model
  const filteredModels = models.filter((model) => model.id === 'gpt-3.5-turbo');
  console.log('Filtered Models == ', filteredModels);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selectedConversation &&
      handleUpdateConversation(selectedConversation, {
        key: 'model',
        value: filteredModels.find(
          (model) => model.id === e.target.value,
        ) as OpenAIModel,
      });
  };

  return (
    <div className="flex flex-col">
      <label className="mb-2 text-left text-neutral-700 dark:text-neutral-400">
        {t('Model')}
      </label>
      <div className="w-full rounded-lg border border-neutral-200 bg-transparent pr-2 text-neutral-900 dark:border-neutral-600 dark:text-white">
        <select
          className="w-full bg-transparent p-2"
          placeholder={t('Select a model') || ''}
          value={selectedConversation?.model?.id || defaultModelId}
          onChange={handleChange}
        >
          {filteredModels.map((model) => (
            <option
              key={model.id}
              value={model.id}
              className="dark:bg-[#343541] dark:text-white"
            >
              {model.id === defaultModelId
                ? `Default (${model.name})`
                : model.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full mt-3 text-left text-neutral-700 dark:text-neutral-400 flex items-center">
        <a
          href="https://platform.openai.com/account/usage"
          target="_blank"
          className="flex items-center"
        >
          <IconExternalLink size={18} className={'inline mr-1'} />
          {t('View Account Usage')}
        </a>
      </div>
    </div>
  );
};
