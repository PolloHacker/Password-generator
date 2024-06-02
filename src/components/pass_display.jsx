import PropTypes from 'prop-types';

export default function PassDisplay({ password }) {
    const handleCopyPassword = () => {
        navigator.clipboard.writeText(password)
    };

    return (
        <div>
            <span>{password}</span>
            <span className="material-symbols-rounded" onClick={handleCopyPassword}>
                file_copy
            </span>
        </div>
    );
}

PassDisplay.propTypes = {
    password: PropTypes.string.isRequired,
};
