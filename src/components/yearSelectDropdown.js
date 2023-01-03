import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function YearSelectDropdown(props) {
    const statsCallback = props.statsCallback;
    const numberOfYearsToDisplay = props.numberOfYearsToDisplay;
    const yearToDisplay = props.yearToDisplay;

    const [year, setYear] = useState(yearToDisplay);

    function changeStatsYear(event) {
        const year = event.replace('#', '').toString();
        setYear(year);
        statsCallback(year);
    }

    return (
        <div style={{ padding: '0.2rem' }}>
            {numberOfYearsToDisplay > 1 && (
                <DropdownButton
                    variant="light"
                    onSelect={changeStatsYear}
                    id="year-select-dropdown-button"
                    title={year + ' Stats'}
                    style={{
                        display: 'flex',
                        justifyContent: 'right',
                    }}
                >
                    <Dropdown.Item eventKey="2023">2023</Dropdown.Item>
                    <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
                    {/* Future years will need to be added here */}
                </DropdownButton>
            )}
        </div>
    );
}

export default YearSelectDropdown;
