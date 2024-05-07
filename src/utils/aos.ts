import AOS from 'aos';
import 'aos/dist/aos.css';

export default function initAOS() {
    AOS.init({
        duration: 1200,
    });
}