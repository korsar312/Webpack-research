const qwe = new Promise((res)=>{
	setTimeout(()=> {

		console.log(1)
		res('');

		},1000)
}).then(()=>{

	console.log(2)

}).then((result) => {

	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(3);
			resolve('4')
			}, 1000);
	});

}).then(()=>{

	console.log(4)

})