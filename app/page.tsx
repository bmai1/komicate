import Button from './components/Button';
import InfoCard from './components/InfoCard';


// react components can only return single parent element
export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-xl text-rose-400">This page is dedicated to Himeko Inaba.</p>
            <Button />
            <InfoCard />
        </div>
    );
}