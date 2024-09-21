const resume = `
personal_information:
  name: "Nitish Reddy"
  surname: "Nandyala"

education_details:
  - degree: "Bachelor's Degree"
    university: "Indian Institute of Information Technology Sricity"
    gpa: "8.6/10"
    graduation_year: "2024"
    field_of_study: "Computer Science"
    exam:
      Machine Learning: "9"
      Computer Vision: "10"
      Natural Language Processing: "9"

experience_details:
  - position: "NLP/LLM Intern"
    company: "Primera Medical Technologies"
    employment_period: "03/2024 - Present"
    location: "Hyderabad"
    industry: "Healthcare IT"
    key_responsibilities:
      - responsibility_1: "Researched and implemented Large Language Models (LLMs), identifying models capable of handling over 16k context, and finetuned Mistral 7b for custom NER tasks, achieving 95% test accuracy."
      - responsibility_2: "Developed and deployed a Flask application with APIs for tokenization, vector search, and de-identification, integrating various OCR technologies including doctr, easyocr, pytesseract, and Azure services."
      - responsibility_3: "Generated a synthetic dataset of 1000 medical notes with IMO/SNOMED terms, addressing data balance issues, and trained Mistral 7b model on an A100 GPU with minimal weight updates for custom NER tasks."
    skills_acquired:
      - "Natural language Processing(NLP)"
      - "Python programming"
      - "RAG"
      - "LLM"
      - "OpenAI"
      - "Azure"
      - "Linux"
  - position: "Computer Vision Intern"
    company: "Sitekick Technologies"
    employment_period: "11/2023 - 03/2024"
    location: "Remote"
    industry: "IT"
    key_responsibilities:
      - responsibility_1: "Experimented with various state-of-the-art object detection algorithms, including YOLO v7, v8, v10, DETR, and a custom-developed YOLT algorithm."
      - responsibility_2: "Automated the evaluation process for three models within a single framework using Python, creating custom task specific metrics to streamline the assessment on a custom test set, potentially saving significant time."
      
    skills_acquired:
      - "Object Detection"
      - "Deep Learning"
      - "Problem Solving"
      - "Cloud computing"
  - position: "UG Researcher"
    company: "Indian Institute of Information Technology, Sricity"
    employment_period: "07/2022 - 12/2023"
    location: "Sricity"
    industry: "Research"
    key_responsibilities:
      - responsibility_1: "Conducted comprehensive research on underwater marine object recognition using deep learning techniques, including YOLO models, domain adaptation methods and synthetic data generation techniques."
    skills_acquired:
      - "Research"
      - "Dataset"
      - "Deep Learning"
projects:
  - name: "Attention in LSTM from scratch"
    description: "In an Encoder-Decoder architecture for English-Telugu translation, the use of an Attention mechanism improved translation results. The project involved pre-processing the Samanantar Dataset of Telugu-English translation sentences and utilizing the spaCy library for tokenization. This approach achieved a BLEU score of 10 in the Neural Machine Translation (NMT) task."
    link: "https://github.com/Nitish-N07/Attention-in-LSTM-from-scratch-"
  - name: "Simulation of unity drone using hand gesture recognition"
    description: "Controlling drone in unity using pyautogui and recognition of count of fingers. Count of fingers is achieved by landmark recognition and threshold for knowing the right gesture."
    link: "https://github.com/Nitish-N07/Simulation-of-unity-drone-using-Hand-gesture-recognition"
  - name: "WhatsappBot using API integration"
    description: "Developed a Node.js serverless function to handle incoming WhatsApp messages using the Twilio API. Integrated the OpenAI API to generate text completions, with custom parameters for temperature and token limits"
    link: "https://github.com/Nitish-N07/WhatsappBot"
  - name: "Transfer Learning Framework for Improving over Underwater Imagery Classification"
    description: "Domain Adaption losses were used to improve upon real-world fishes trained using synthetic cartoon fishes. Improved classification Accuracy over 7% upon using Coral and MMD losses across ten different models."
    link: "https://github.com/Nitish-N07/Domain-Adaptation-on-underwater-images"
  - name: "DETR Object Detection on Grocery items using Synthetic Data from Unity"
    description: "Generated Synthetic Data from hand crafted 3D Assets in Unity and auto-labeled by perception package. Used Pretrained Detection Transformer from Facebook and finetuned on Synthetic Data generated above"
    link: "https://github.com/Nitish-N07/DETR-Object-Detection-on-Grocery-items-using-Synthetic-Data-from-Unity"

publications:
  - name: "Under Water Object Detection using Synthetic Data"
    description: "Leveraged synthetic images for underwater object detection due to unique underwater challenges. Benchmarked the performance of YOLO object detection models on both synthetic and real-world datasets."

achievements:
  - name: "Top 10 in National Emids healthcare Hackthon"
    description: "Fast Entry of e-Prescribing. we proposed auto suggestion of prescribing using ml models, frequency, templated approach. medical conversation was also transcribed to capture for faster e-Prescribing"
  - name: "Top 30 in Kaggle Leaderboard for LLM Math Problem solving Competition"
    description: "Used Agentic flow to execute the translated math or reasoning problem in a code sandbox for precise mathematical output. using codestral for math problem to python problem conversion and code sandbox is provided E2B provider."

certifications:
  - "Deep Learning Specialization"
  - "Generative AI with Large Language Models"

languages:
  - language: "English"
    proficiency: "Professional"
  - language: "Telugu"
    proficiency: "Native"


interests:
  - "Artificial Intelligence"
  - "Generative AI"
  - "Natural Language Processing"
  - "Cloud Technologies"

PROOF OF WORK

email: "nitishreddynandyala@gmail.com"
github: "https://github.com/Nitish-N07"
linkedin: "https://www.linkedin.com/in/nitish-reddy-nandyala-ba6723248/"
Portfolio Website: https://portfolio.nitish.com


`
export default resume
