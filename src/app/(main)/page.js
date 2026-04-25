import { redirect } from "next/navigation";

const default_categorry = '01'
const Home = async () => {

redirect(`/category/${default_categorry}`)
  
}


export default Home;