import type { Publication } from '../types';

export const publications: Publication[] = [

    {
        title:
            'AdViT-RE: Adversarial Vision Transformer with Rényi Entropy for Multimodal Epileptic Seizure Prediction using Wearable EEG and ECG',

        authors: 'Anuj Phuyal et al.',
        venue: 'EIT - IEEE Electro/Information Technology',
        year: '2026',

        abstract:
            'Epilepsy is a neurological disorder characterized by recurrent and unpredictable seizures, making early seizure prediction important for improving patient safety and quality of life. Most existing approaches rely on multi-channel scalp EEG recorded in clinical or Epilepsy Monitoring Unit (EMU) settings, which can be intrusive, expensive, and unsuitable for long-term monitoring. This work proposes a multimodal seizure prediction framework using only two EEG channels and one ECG channel obtained from wearable sensors. The proposed approach integrates Rényi entropy-based multimodal fusion with a Vision Transformer (ViT) architecture to identify preictal patterns and predict seizures up to 40 minutes before onset. The framework achieves 92.95% accuracy, 96.18% sensitivity, and 89.67% specificity. Experimental results demonstrate that the proposed low-channel wearable approach achieves performance comparable to multi-channel scalp-based systems, highlighting its potential for practical and continuous epilepsy monitoring.',

        keywords: [
            'Epileptic Seizure Prediction',
            'Wearable Sensors',
            'EEG',
            'ECG',
            'Multimodal Fusion',
            'Rényi Entropy',
            'Vision Transformer (ViT)'
        ],

        status: 'Published Research'
    },

    { title: 'Detecting AI-Generated Source Code with Probability, Structural, and Style Signals', authors: 'Anuj Phuyal · Working title', venue: 'Ongoing research', year: 'In progress', abstract: 'An investigation of model-token probability distributions, code complexity, AST structure, identifiers, compression, embeddings, and explainable classifiers for code provenance.', keywords: ['AI Code Detection', 'Rényi Entropy', 'CodeBERT', 'Explainable AI'], status: 'Research in Progress' }
];
