const SectionHeading = ({title, styles}) => {

    return ( <h1 className={`text-2xl md:text-3xl text-landscape-700 font-semibold tracking-wider ${styles}`}>{title}</h1> );
}
 
export default SectionHeading;
