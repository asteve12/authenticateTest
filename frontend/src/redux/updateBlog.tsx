import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import ForwardBlogUpDate from "../axios/axios"

const updateBlogAsync = createAsyncThunk("updateText",async(userText:any)=>{
    const userToken = localStorage.getItem("userToken")
    console.log('myyuui', userToken);

 
    const { text } = userText;

  const data  ={text:text}
  if (userText.type === 'getMsg'){
      const blogText = ForwardBlogUpDate.get('/api/blog', {
        headers: {
          //@ts-ignore
          'x-auth-token': userToken,
        },
      })
        .then((response) => {
          console.log('blogGet', response);
          return {
            status: true,
            text: response.data,
          };
        })
        .catch((error) => {
          return {
            status: false,
            errorMsg: error.response,
          };
        });
      return blogText;

  }

    const updateBlogRes = ForwardBlogUpDate.post(`/api/blog`, data, {
      headers: {
        //@ts-ignore
        'x-auth-token': userToken,
      },
    }).then((response) => {
      const { status } = response;
      if (status) {
        const blogText = ForwardBlogUpDate.get('/api/blog', {
          headers: {
            //@ts-ignore
            'x-auth-token': userToken,
          },
        })
          .then((response) => {
            console.log('blogGet', response);
            return {
              status: true,
              text: response.data,
            };
          })
          .catch((error) => {
            return {
              status: false,
              errorMsg: error.response,
            };
          });
        return blogText;
      }
    });
    return await updateBlogRes;

})



const updateBlog = createSlice({
  name: 'updateText',
  initialState: {
    text: [],
  },
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [updateBlogAsync.pending]: (state) => {},
    //@ts-ignore
    [updateBlogAsync.fulfilled]: (state,updateText) => {
        const { payload } = updateText;
        console.log('loader', updateText);
     
        if(payload.status){
           state.text = payload.text
        }
        else{

        }
        
    },
    //@ts-ignore
    [updateBlogAsync.rejected]: (state) => {},
  },
});

export default updateBlog.reducer

export  { updateBlogAsync }; 