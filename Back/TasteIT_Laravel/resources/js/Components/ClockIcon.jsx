import { propTypesCount } from "@material-tailwind/react/types/components/rating";

export default function ClockIcon(props) {


    return Array.from({ length: props.count }, (_, index) => (
        <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ));
}
