import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { YearSelectDropdownProps } from '../../types/interfaces';

function YearSelectDropdown(props: YearSelectDropdownProps) {
    const statsCallback = props.statsCallback;
    const yearToDisplay = props.yearToDisplay;
    const displayAllYearsOption = props.displayAllYearsOption;

    const [year, setYear] = useState(yearToDisplay);

    function changeStatsYear(eventKey: string | null) {
        if (eventKey) {
            const year = eventKey.replace('#', '').toString();
            setYear(year);
            statsCallback(year);
        }
    }

    return (
        <div style={{ padding: '0.2rem' }}>
            <DropdownButton
                variant="light"
                onSelect={changeStatsYear}
                id="year-select-dropdown-button"
                title={year}
                style={{
                    display: 'flex',
                    justifyContent: 'right',
                }}
            >
                {/* Future years will need to be added here */}
                <div id="full-stat-years-options">
                    <Dropdown.Item id="option2025" eventKey="2025">
                        2025
                    </Dropdown.Item>
                    <Dropdown.Item id="option2024" eventKey="2024">
                        2024
                    </Dropdown.Item>
                    <Dropdown.Item id="option2023" eventKey="2023">
                        2023
                    </Dropdown.Item>
                    <Dropdown.Item id="option2022" eventKey="2022">
                        2022
                    </Dropdown.Item>
                    <Dropdown.Item id="option2021" eventKey="2021">
                        2021
                    </Dropdown.Item>
                    <Dropdown.Item id="option2019" eventKey="2019">
                        2019
                    </Dropdown.Item>
                    <Dropdown.Item id="option2018" eventKey="2018">
                        2018
                    </Dropdown.Item>
                    <Dropdown.Item id="option2017" eventKey="2017">
                        2017
                    </Dropdown.Item>
                    <Dropdown.Item id="option2016" eventKey="2016">
                        2016
                    </Dropdown.Item>
                    <Dropdown.Item id="option2015" eventKey="2015">
                        2015
                    </Dropdown.Item>
                    <Dropdown.Item id="option2014" eventKey="2014">
                        2014
                    </Dropdown.Item>
                    <Dropdown.Item id="option2013" eventKey="2013">
                        2013
                    </Dropdown.Item>
                    {displayAllYearsOption && (
                        <>
                            <Dropdown.Divider />
                            <Dropdown.Item id="optionAll" eventKey="All Years">
                                All Years
                            </Dropdown.Item>
                        </>
                    )}
                </div>
            </DropdownButton>
        </div>
    );
}

export default YearSelectDropdown;
