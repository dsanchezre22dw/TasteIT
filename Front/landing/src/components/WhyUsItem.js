export default function WhyUsItem(props){
    return (
        <div className="col-xl-4" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
            <i className={`bi ${props.class}`}></i>
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
            </div>
        </div>
    )
}