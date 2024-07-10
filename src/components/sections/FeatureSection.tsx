import React from 'react';

const features = [
  {
    title: 'Data Visualization',
    description: 'The ability to present complex data in a visually understandable way, such as through charts.',
    image: './src/Images/4.png',
  },
  {
    title: 'Integration',
    description: 'Seamless integration with other software and tools that a business uses, creating a unified system.',
    image: 'src/Images/6.png',
  },
  {
    title: 'Customization',
    description: 'Allowing users to tailor the dashboard to their specific needs and preferences.',
    image: 'src/Images/5.png',
  },
  {
    title: 'Reporting',
    description: 'Generating detailed reports that provide insights into the business’s performance.',
    image: 'src/Images/4.png',
  },
  {
    title: 'User Access Control',
    description: 'Managing who can access and interact with the dashboard, ensuring data security.',
    image: 'src/Images/6.png',
  },
  {
    title: 'Collaboration Tools',
    description: 'Features that facilitate teamwork and communication among team members.',
    image: 'src/Images/5.png',
  },
];

const FeatureSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="text-center mb-12">
        <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 mb-4 inline-block text-sm font-medium">
          Features
        </div>
        <h2 className="text-5xl font-bold">Real-Time Insights, <br /><span className="text-purple-500">Real-Time Results</span></h2>
        <p className="mt-4 text-gray-600">Saas dashboard that enable users to perform various <br />tasks and activities related to their business</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <div key={index} className={`p-6 rounded-lg shadow-md  flex flex-col items-center`}>
            <div className="mb-4">
              <img src={feature.image} alt={feature.title} className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
            <p className="text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
