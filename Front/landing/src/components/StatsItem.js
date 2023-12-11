export default function StatsItem(props){
    return (
        <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
                <span data-purecounter-start="0" data-purecounter-end={props.count} data-purecounter-duration="1" className="purecounter"></span>
                <p>{props.name}</p>
            </div>
        </div>
    )
}