import React, { memo, useEffect, useState, useContext } from "react";

const MonthManager = memo((props) => {
    
    useEffect(() => {}, []);
    
    return (
        <React.Fragment>
            <div className="month-calendar-container">
                <section className="month-calendar-container-one">
                    <div>
                        <span className="month-calendar-container-day">T</span>
                        <span>11</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">F</span>
                        <span>12</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">T</span>
                        <span>13</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">F</span>
                        <span>14</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">T</span>
                        <span>15</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">F</span>
                        <span>16</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">T</span>
                        <span>17</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">F</span>
                        <span>18</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">T</span>
                        <span>19</span>
                    </div>
                    <div className="month-calendar-container-day-active">
                        <span>F</span>
                        <span>20</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">T</span>
                        <span>11</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">F</span>
                        <span>12</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">T</span>
                        <span>11</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">F</span>
                        <span>12</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">T</span>
                        <span>11</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">F</span>
                        <span>12</span>
                    </div>
                    <div>
                        <span className="month-calendar-container-day">F</span>
                        <span>12</span>
                    </div>
                </section>
                <section className="month-calendar-container-one">
             
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                    <span className="vertical-line"></span>
                </section>
            </div>
        </React.Fragment>
    );
});

export default MonthManager;
