import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, child, get } from 'firebase/database';
import PageHeader from './PageHeader';

export default function ChatbotPage(props) {
  const urlParams = useParams();
  return (
    <>
      {props.isLoaded && <PageHeader text={props.chatbotData[urlParams.id].name} transition={true}/>}
    </>
  );
}