const star = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        fill="#f9c800"
        viewBox="0 0 24 24"
    >
        <path d="m21.5 9.757-5.278 4.354 1.649 7.389L12 17.278 6.129 21.5l1.649-7.389L2.5 9.757l6.333-.924L12 2.5l3.167 6.333z" />
    </svg>
);

export default function Rating() {
    return (
        <div className="flex justify-center">
            {star}
            {star}
            {star}
            {star}
            {star}
        </div>
    );
}
