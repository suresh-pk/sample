const BASE_URL = 'http://10.100.102.223:8090'; // Update with the correct IP and port

export const postData = async (endpoint: string, method: string, data:any) => {
  try {
    if(data !== ""){
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJraWQiOiJjYWMwNjVjMi02Y2U0LTQwMzktOWY4NC0zMjRmNjU4MmEzZjgiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ4aW9uLmhhaWRlckBmaXhlZGZvci5jb20iLCJhdWQiOiJsZWdhY3ktb2F1dGgtY2xpZW50IiwibmJmIjoxNjkzMTk5NzUwLCJ1c2VyX2lkIjoxMDA4LCJzY29wZSI6WyJyZWFkIiwidXNlcl9pbmZvIiwib3BlbmlkIiwiQWRtaW4iLCJ3cml0ZSJdLCJvcmdhbml6YXRpb25faWQiOjgyMCwiaXNzIjoiaHR0cDpcL1wvMTAuMTAwLjIwLjE3MTo4MDkxIiwiZXhwIjoxNjkzNDk5NzUwLCJpYXQiOjE2OTMxOTk3NTAsImVtYWlsIjoieGlvbi5oYWlkZXJAZml4ZWRmb3IuY29tIn0.iosP1spSBJhHwxnKYERttvx5sq1ASy96aKqzKAThBodKSRTBQS_XttDd_PrV1re3OcHo_syHOqcPpAb2LNgOOKe8dT-ledUJq3yeIfmzUEKYNvnOUnvJNPPbmw4u6qKDnJQWhr8qFYSIu184_Lcc45bojQklK9djWGut6l3HCXI9NuOCam7mxDicEGtf4rrgRzLnJPQKxmPb_YtP7e6SYTq67K55GAZ_VQEt2WBC0ua3-TcbkGOi6f80nJ7bV5vlqlUd7eGCz6jmIEymDp4vXwZTdMboeluEvGDTt6moK15IbGFPkZqDVQURmSPRYz1h8V7vVbY9WbNbnCKCSXuXlg'
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.text();
      return responseData; // Return the entire response data
    }else{
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJraWQiOiJjYWMwNjVjMi02Y2U0LTQwMzktOWY4NC0zMjRmNjU4MmEzZjgiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ4aW9uLmhhaWRlckBmaXhlZGZvci5jb20iLCJhdWQiOiJsZWdhY3ktb2F1dGgtY2xpZW50IiwibmJmIjoxNjkzMTk5NzUwLCJ1c2VyX2lkIjoxMDA4LCJzY29wZSI6WyJyZWFkIiwidXNlcl9pbmZvIiwib3BlbmlkIiwiQWRtaW4iLCJ3cml0ZSJdLCJvcmdhbml6YXRpb25faWQiOjgyMCwiaXNzIjoiaHR0cDpcL1wvMTAuMTAwLjIwLjE3MTo4MDkxIiwiZXhwIjoxNjkzNDk5NzUwLCJpYXQiOjE2OTMxOTk3NTAsImVtYWlsIjoieGlvbi5oYWlkZXJAZml4ZWRmb3IuY29tIn0.iosP1spSBJhHwxnKYERttvx5sq1ASy96aKqzKAThBodKSRTBQS_XttDd_PrV1re3OcHo_syHOqcPpAb2LNgOOKe8dT-ledUJq3yeIfmzUEKYNvnOUnvJNPPbmw4u6qKDnJQWhr8qFYSIu184_Lcc45bojQklK9djWGut6l3HCXI9NuOCam7mxDicEGtf4rrgRzLnJPQKxmPb_YtP7e6SYTq67K55GAZ_VQEt2WBC0ua3-TcbkGOi6f80nJ7bV5vlqlUd7eGCz6jmIEymDp4vXwZTdMboeluEvGDTt6moK15IbGFPkZqDVQURmSPRYz1h8V7vVbY9WbNbnCKCSXuXlg'
        }
      });
      const responseData = await response.text();
      return responseData; // Return the entire response data
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

