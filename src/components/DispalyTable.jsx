function DispalyTable({data, reposetiery}) {
return (
    <>
<table className="ui celled table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Aavatar</th>
            <th>login</th>
            <th>location</th>
            <th>Repositories</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{data.name}</td>

            <td>{
                !data.avatar_url? "" : 
                <img 
                className="ui small circular image"
                src={data.avatar_url} 
                alt="avatar_url"/>}
            </td>

            <td>{data.login}</td>

            <td>{!data.location ? "" : data.location}</td>

            <td>{reposetiery.map((repo)=>{
                return(
                    <div key={repo.name} className="ui relaxed divided list">
                        <div className="item">
                            <i className="large github middle aligned icon"></i>
                        <div className="content">
                            <a href={repo.html_url} target="blank"
                            className="header">{repo.html_url}</a>
                        <div className="description">{repo.name}</div>
                        </div>
                        </div>
                    </div>
                )
            })}</td>
        </tr>
    </tbody>
</table>
    </>
)
}

export default DispalyTable;