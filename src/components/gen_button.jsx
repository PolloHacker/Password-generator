import PropTypes from 'prop-types';

export default function GenButton({ onGenerate }) {
    return (
        <div>
            <button className="gen-button" onClick={onGenerate}>
                Generate
                <span className="material-symbols-rounded">
                    arrow_forward
                </span>
            </button>
        </div>
    );
}

GenButton.propTypes = {
    onGenerate: PropTypes.func.isRequired,
}