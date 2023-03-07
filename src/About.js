import markImage from './img/Mark.jpg';
import nilaImage from './img/Nila.jpg';
import minsuhImage from './img/Minsuh.jpg';
import brandonImage from './img/Brandon.jpeg';

export default function About() {

  let teamMembers = [
    {
      name: 'Mark Frazey',
      image: markImage
    },
    {
      name: 'Nila Ragu',
      image: nilaImage
    },
    {
      name: 'Minsuh Kim',
      image: minsuhImage
    },
    {
      name: 'Brandon Mendoza',
      image: brandonImage    }
  ];

  return (
    <>
      <h1>About</h1>
      <p>Welcome to Chatbot Cemetery, a website dedicated to exploring the rise and fall of chatbots over the past six years.</p>
      <p>As the popularity of chatbots grew, so did the number of bots created. However, not all chatbots were successful and many were shut down due to various reasons.</p>
      <p>Through our website, we aim to provide insight into why certain chatbots failed, whether it was due to lack of user engagement, technological limitations, or ethical concerns.</p>
      {teamMembers.map((member, index) => (
        <div key={index}>
          <img src={member.image} alt={member.name} />
          <h2>{member.name}</h2>
        </div>
      ))}
    </>
  );
}