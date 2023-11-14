    interface Post
    {
        uri:string;
        method:string;
        body:any;
    }
    
    async function CallAPI(request:Post)
    {
        const respone = await fetch(request.uri,
        {
            method: request.method,
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request.body),
        });

        if(!respone.ok)
        {
            throw new Error("Fail");
        }

        const data = await respone.json();
        return data;
    }