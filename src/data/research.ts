export const researchContent = {
  heading: {
    eyebrow: 'Research',
    title: 'AI systems grounded in evidence',
    description: 'My research explores robust multimodal learning and trustworthy ways to understand AI-generated artifacts.',
  },
  featured: {
    label: "Master's thesis research",
    title: 'AdViT-RE',
    subtitle: 'Adversarial Vision Transformer with Rényi Entropy',
    description: 'An AI-powered framework for predicting epileptic seizures from wearable EEG and ECG. It uses informative entropy-based signal representations and adversarially trained deep learning to address noise and patient variability outside traditional clinical environments.',
    highlights: ['Wearable EEG + ECG', 'Rényi entropy representation', 'Vision Transformer architecture', 'Adversarial robustness', '~40-minute experimental horizon'],
    metric: '≈ 40 min',
    metricLabel: 'preictal prediction horizon achieved in experiments',
  },
  ongoing: {
    label: 'Ongoing research',
    title: 'AI-Generated Code Detection',
    subtitle: 'Explainable code provenance signals',
    description: 'Distinguishing human-written source code from model-generated code and anomalous AI patches using distributional, structural, stylistic, and learned representations.',
    highlights: ['Token probabilities & surprisal', 'Perplexity & Rényi entropy', 'AST, complexity & style features', 'Compression & embedding baselines', 'Random Forest, XGBoost & SHAP'],
    models: ['Qwen2.5-Coder', 'CodeBERT'],
  },
};
