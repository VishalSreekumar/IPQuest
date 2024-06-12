import {request,gql} from 'graphql-request'
const MASTER_URL=""
//Your Hygraph backend key for accessing required functionalities

export const getVideoList = async(tags)=>{
    const query1=gql`
    query VideoList {
        iprAnimatedCourses(where: {tags: `+tags+`}) {
            id
            name
            tags
            chapters {
                title
                id
                video{
                    url
                }
            }
        }
                }
                    `
const result1 = await request(MASTER_URL,query1);
return result1;

}