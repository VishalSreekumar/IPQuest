import {request,gql} from 'graphql-request'
const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/clrs2h9s603fr01w1skp19229/master"
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
