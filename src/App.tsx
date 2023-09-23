import React, { useEffect, useState } from 'react';
import { postData } from './api';

//Main fuction
function App() {
  const [message, setMessage] = useState<string>('');
  const [postResponse, setPostResponse] = useState<string>('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const oauthToken = urlParams.get('oauth_token');
    const oauthVerifier = urlParams.get('oauth_verifier');

    if (oauthVerifier) {
      sendToBackend(oauthToken, oauthVerifier);
    }
  }, []);
  //Send to backend
  const sendToBackend = async (token: string | null, verifier: string | null) => {
    if (token && verifier) {
      try {
        var data = { oauth_token: token, oauth_verifier: verifier};
        const response1 = await postData('/twitter/callback?oauth_token='+token+'&oauth_verifier='+verifier, 'GET','');
        console.log(response1);
        console.log('Response from backend:', response1);
        //window.close();
      } catch (error) {
        console.error('Error sending data to backend:', error);
      }
    }
  };
  //Handle post
  const handlePostRequest = async () => {
    try {
      const response = await postData('/twitter', 'GET', "");
      window.open(response, '_blank', 'width=600,height=400');
      setPostResponse(JSON.stringify(response));
    } catch (error) {
      console.error('Error making POST request:', error);
      setPostResponse('Error making POST request');
    }
  };

  return (
    <div className="App">
      <h1>React App Communicating with Another Server</h1>
      <p>Message from another server: {message}</p>
      <button onClick={handlePostRequest}>Make POST Request</button>
      <p>Response from POST request: {postResponse}</p>
    </div>
  );
}

export default App;
