import {useEffect,useState} from "react"
import {handleRequest} from './../utils/httpService';
import {baseUrl} from "../config";
import Spinner from 'react-bootstrap/Spinner';
import CardUser from "../components/CardUser";

type User={
	id: number,
	name: string,
	age: number
}
export type userState={
	name: string,
	age: number
}
interface UserResponse {
	users: User[];
}
export const Home: React.FC=() => {
	const [data,setData]=useState<userState[]>([])
	useEffect(() => {
		const fetchData=async () => {
			try {
				const res=await handleRequest<UserResponse>(`${baseUrl}/user`,"GET");
				setData([...res.users])
			} catch(error) {
				console.error("Error fetching data:",error);
			}
		};
		fetchData();
	},[])


	return (
		<div className="container-user">
			{data.length!==0? data.map((elt,index) => <CardUser user={elt} key={index} />):
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>}
		</div>)
}