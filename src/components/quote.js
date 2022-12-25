


{/*
const Quote = () => {

    return (

        <div className="text-center" style={{paddingTop: "120px"}}>
            <i>
                <p className='pt-3 fs-5'>"Discovering the unexpected is more important than confirming 
                    the known."
                </p>
                <p style={{fontSize: "1.05em"}}>-- GeorgeBox</p>
            </i>
        </div>
    )
}


export default Quote;

*/}


let api = "https://www.neutrinoapi.com/apis.json";

fetch(api)
.then(res => res.json()).then( (response = [response]) => { 
    [response].map(respons => {
        console.log(respons)
    });
});


