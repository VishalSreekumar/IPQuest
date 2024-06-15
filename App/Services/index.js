import {request,gql} from 'graphql-request'
const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/clrs2h9s603fr01w1skp19229/master"
// Your Hygraph Backend key for accessing required functionalities

export const getCourseList = async(level)=>{
    const query=gql`
    query CourseList {
        iprAnimatedCourses(where: {level: `+level+`}) {
          id
          name
          level
          tags
          time
          banner {
            url
          }
          chapters {
            title
            id
            video{
              url
            }
          }
          description {
            markdown
          }
        }
      }
    `
    const result = await request(MASTER_URL,query);
    return result;

}
//  
//   const query1=gql`
//   query VideoList {
//       iprAnimatedCourses(where: {tags: `+tags+`}) {
//         id
//         name
//         tags
//         chapters {
//           title
//           id
//           video{
//             url
//           }
//         }
//       }
//     }
//   `
//   const result1 = await request(MASTER_URL,query1);
//   return result1;

// }
export const createNewUser=async(userName,email,profileImageUrl)=>{
  const mutationQuery=gql`
  mutation CreateNewUser{
    upsertUserDetail(
      upsert: {create:
      {email:"`+email+`",
      point: 10,
      profileImage: "`+profileImageUrl+`",
      userName: "`+userName+`"},
      update:{email: "`+email+`",
       profileImage:
      "`+profileImageUrl+`",userName:"`+userName+`"}}
      where:{email: "`+email+`"}
    ) {
      id
    }
    publishUserDetail(where: {email: "`+email+`"}) {
      id
    }
  }`
const result = await request(MASTER_URL,mutationQuery);
return result;
}
export const getUserDetail = async(email)=>{
  const query=gql`
  query getUserDetails{
    userDetail(where:
      {email:"`+email+`"}){
        point
      }
      
  }`
  const result=await request(MASTER_URL,query);
  return result;
}
export const GetAllUsers=async()=>{
  const query=gql`
  query GetAllUsers{
    userDetails(orderBy: point_DESC){
      id
      profileImage
      userName
      point
    }
  }`
  const result=await request(MASTER_URL,query);
  return result;
}
export const PointUpdate = async()=>{
  const mutationQuery=gql`
  mutation pointUpdate{
    updateUserDetail(where:{email:"`+userEmail+`"},
    data:{point:`+ (points+3) +`}){
      point
    }
    publishUserDetail(where:{email:"`+userEmail+`"}){
      id
    }
  }`
}
