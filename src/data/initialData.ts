import { Project, SkillCategory, UserProfile } from '../types/portfolio';

export const initialProfile: UserProfile = {
  name: 'DURGA SANKAR DAS',
  kicker: 'DATA SCIENTIST',
  role: 'Aspiring Data Scientist',
  tagline: 'DATA · INSIGHT · IMPACT',
  heroBio:
    'Aspiring Data Scientist with a strong foundation in machine learning, data analysis, and building impactful data-driven solutions.',
  aboutBio:
    "I'm Durga Sankar Das, an aspiring Data Scientist passionate about extracting meaningful insights from data and building intelligent systems that solve real-world problems.",
  email: 'durgasankardas07@gmail.com',
  location: 'Kolkata, India',
  github: 'https://github.com/durgasankardas',
  linkedin: 'https://linkedin.com/in/durgasankardas',
  avatarUrl: 'MyImage.jpeg', // Empty means using our high-tech stylized interactive visual avatar with upload option
  resumeFileName: 'Durga_Sankar_Das_Resume.pdf',
  stats: {
    projects: '3+',
    leetcodeSolved: '250+',
    codingHours: '100+',
    accuracy: '98.5%',
  },
  details: {
    education: 'BCA - Bachelor in Computer Application',
    focus: 'Data Science, Machine Learning, AI',
    interests: 'Deep Learning, NLP, Data Visualization',
    goal: 'To contribute to impactful data-driven solutions',
  },
};

export const initialProjects: Project[] = [
  {
    id: 'customer-churn',
    number: '01',
    category: 'MACHINE LEARNING',
    title: 'Customer Churn Prediction',
    description:
      'Built a churn prediction model using ensemble methods to improve customer retention strategies.',
    tags: ['Python', 'Scikit-learn', 'Pandas'],
    graphicType: 'churn',
    metrics: [
      { label: 'ROC-AUC', value: '0.94' },
      { label: 'Recall', value: '89.2%' },
      { label: 'Retention Boost', value: '+18%' },
    ],
    caseStudy: {
      overview:
        'A comprehensive predictive modeling project designed for subscription and telecom providers to detect early signals of subscriber disengagement before cancellation occurs.',
      challenge:
        'Addressing severe class imbalance (83% active vs 17% churned customers) while avoiding false positives that waste promotional retention budgets.',
      solution:
        'Trained and benchmarked Random Forest, LightGBM, and XGBoost classifiers with SMOTE sampling and BayesSearchCV hyperparameter optimization. Implemented SHAP value explainability so marketing teams understand the drivers behind each churn score.',
      impact: [
        'Achieved 0.94 ROC-AUC and 89.2% recall on customer churn test split',
        'Built automated pipeline capable of scoring 50,000 customers in under 4 seconds',
        'Identified contract tenure and payment failure frequency as highest risk factors',
      ],
      techStack: ['Python 3.11', 'Scikit-Learn', 'XGBoost', 'Pandas', 'SHAP', 'Seaborn'],
      repoUrl: 'https://github.com/durgasankardas/customer-churn-prediction',
      liveDemoUrl: 'https://churn-predictor-demo.example.com',
    },
  },
  {
    id: 'ecommerce-sales',
    number: '02',
    category: 'DATA ANALYSIS',
    title: 'E-commerce Sales Analysis',
    description:
      'Analyzed sales trends and customer behavior to derive insights and improve business decisions.',
    tags: ['Python', 'SQL', 'Tableau'],
    graphicType: 'sales',
    metrics: [
      { label: 'Records Analyzed', value: '1.2M+' },
      { label: 'Query Speedup', value: '3.4x' },
      { label: 'Identified Lift', value: '+$140k' },
    ],
    caseStudy: {
      overview:
        'Multi-channel e-commerce exploratory data analysis and executive dashboard uncovering seasonal buying behaviors, customer lifetime value (CLV), and basket affinity rules.',
      challenge:
        'Fragmented transaction logs across multiple regional databases with messy datetime stamps, missing foreign keys, and inconsistent product taxonomies.',
      solution:
        'Constructed an analytical PostgreSQL staging schema, performed RFM (Recency, Frequency, Monetary) customer segmentation, and designed an interactive Tableau executive dashboard with automated alert triggers.',
      impact: [
        'Segmented 120,000+ distinct customers into 5 actionable behavioral cohorts',
        'Uncovered underperforming SKU categories resulting in $140,000 reallocation savings',
        'Published executive KPI dashboard adopted by cross-functional sales leaders',
      ],
      techStack: ['PostgreSQL', 'Python', 'Tableau', 'NumPy', 'Matplotlib', 'SQLAlchemy'],
      repoUrl: 'https://github.com/durgasankardas/ecommerce-sales-analysis',
      liveDemoUrl: 'https://tableau-public.example.com/ecommerce-insights',
    },
  },
  {
    id: 'image-classification',
    number: '03',
    category: 'DEEP LEARNING',
    title: 'Image Classification Model',
    description:
      'Developed a CNN model for image classification achieving high accuracy on benchmark datasets.',
    tags: ['Python', 'TensorFlow', 'Keras'],
    graphicType: 'vision',
    metrics: [
      { label: 'Test Accuracy', value: '96.8%' },
      { label: 'Inference Latency', value: '28ms' },
      { label: 'Model Size', value: '14.2 MB' },
    ],
    caseStudy: {
      overview:
        'End-to-end computer vision pipeline utilizing transfer learning with EfficientNet and custom residual convolutional blocks for multi-class visual recognition.',
      challenge:
        'Balancing high validation accuracy with minimal edge deployment latency and preventing overfitting across limited training sample categories.',
      solution:
        'Incorporated CutMix and MixUp data augmentation strategies, cosine annealing learning rate schedules, and post-training dynamic INT8 quantization for rapid CPU inference.',
      impact: [
        'Reached 96.8% top-1 accuracy on 50-class benchmark dataset',
        'Reduced model footprint by 64% with zero discernible loss in classification F1-score',
        'Integrated with lightweight FastAPI endpoint for real-time camera inference',
      ],
      techStack: ['TensorFlow 2.x', 'Keras', 'OpenCV', 'FastAPI', 'Albumentations', 'Docker'],
      repoUrl: 'https://github.com/durgasankardas/deep-learning-image-classifier',
      liveDemoUrl: 'https://vision-model-demo.example.com',
    },
  },
  {
    id: 'nlp-sentiment-engine',
    number: '04',
    category: 'NATURAL LANGUAGE PROCESSING',
    title: 'Sentiment & Intent Engine',
    description:
      'Engineered fine-tuned transformer pipeline for multilingual sentiment and intent parsing in customer reviews.',
    tags: ['Python', 'PyTorch', 'Transformers'],
    graphicType: 'nlp',
    metrics: [
      { label: 'F1-Score', value: '0.92' },
      { label: 'Throughput', value: '450 req/s' },
      { label: 'Languages', value: '3+' },
    ],
    caseStudy: {
      overview:
        'Natural Language Processing pipeline that parses customer feedback and product reviews into positive/neutral/negative sentiment with fine-grained aspect-based polarity.',
      challenge:
        'Handling informal slang, sarcasm, and multilingual code-mixing prevalent in user-generated online comments.',
      solution:
        'Fine-tuned RoBERTa on domain-specific corpora using Hugging Face Transformers, paired with ONNX Runtime optimization for blazing production throughput.',
      impact: [
        'Delivered 0.92 macro F1-score across nuanced customer feedback tickets',
        'Automated ticket categorization saving over 15 hours of manual triage each week',
      ],
      techStack: ['Python', 'PyTorch', 'Hugging Face', 'ONNX', 'Streamlit'],
      repoUrl: 'https://github.com/durgasankardas/nlp-sentiment-intent-engine',
    },
  },
];

export const initialSkills: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'code',
    skills: ['Python', 'SQL', 'R', 'JavaScript', 'C++'],
  },
  {
    id: 'analytics',
    title: 'Data & Analytics',
    icon: 'database',
    skills: ['Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Seaborn', 'Tableau'],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    icon: 'brain',
    skills: ['Scikit-learn', 'XGBoost', 'Statsmodels', 'TensorFlow', 'Keras', 'PyTorch'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: 'grid',
    skills: ['Jupyter Notebook', 'VS Code', 'Git & GitHub', 'Docker', 'Kaggle', 'Linux'],
  },
];
