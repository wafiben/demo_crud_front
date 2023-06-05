export const handleRequest=async<T>(url: string,method: string,data?: any) => {
	const option: RequestInit={
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: data? JSON.stringify(data):null
	}
	const response=await fetch(url,option);
	if(response.status!==200) {
		throw new Error("request is failed");
	}
	const responseData: T=await response.json();
	return responseData;
}