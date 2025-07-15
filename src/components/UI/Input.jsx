export default function Input({ label, id, type }) {
    return (
        <p className="control">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} required type={type} />
        </p>
    );
}