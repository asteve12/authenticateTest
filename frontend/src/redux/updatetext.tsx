import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import ForwardBlogUpDate from "../axios/axios"

const updateBlogAsync = createAsyncThunk("updateText",async(userText:any)=>{
    const userToken = localStorage.getItem("userToken")
    console.log('myyuui', userToken);
 
    const { text } = userText;

    const updateBlogRes = ForwardBlogUpDate.post(`/api/blog?text=${text}`).then((response)=>{
    
      const { status } = response;
      if(status){
         const blogText = ForwardBlogUpDate.get('/api/blog', {
            headers: {
              //@ts-ignore
              'x-auth-token': userToken,
            },
          }).then((response)=>{
              
             const Blog = response.data.map((eachItems:any)=>{
                  let blogres = ForwardBlogUpDate.put(
                    `/api/blog/${eachItems._id}`,"",
                    {
                      headers: {
                        //@ts-ignore
                        'x-auth-token': userToken,
                      },
                    }
                  )
                    .then((response) => {
                    
                      return {
                        status: true,
                        msg: 'hejhfbjhbfjhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbjfjhbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbj',
                      };
                    })
                    .catch((error) => {
                      console.log('my upddd', error.response);
                      return{
                          status:false,
                          errorMsg:error.response
                      }
                    });

                    return blogres;

              })
              return Blog;

          })

          return blogText;

      }
    })
    return await updateBlogRes;

})



const updateBlog = createSlice({
  name: 'updateText',
  initialState: {
    text: '',
  },
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [updateBlogAsync.pending]: (state) => {},
    //@ts-ignore
    [updateBlogAsync.fulfilled]: (state,updateText) => {
        const { payload } = updateText;
        console.log('loader', updateText);
        console.log('ooppp', payload[0].status);
        if(payload[0].status){
           state.text = payload[0].text
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