import { useState } from "react"
import { DateField } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { Button } from "@mui/material"
import "dayjs/locale/en-gb"

import getResultAge from "../../../utils/getResultAge"

const Main = () => {
  const [inputDate, setInputDate] = useState("")
  const [information, setInformation] = useState("")

  const handleInputDate = (event) => {
    if (event.$d.getFullYear() < 1900) {
      setInputDate("date_not_human")
    } else {
      setInputDate(event.$d.getTime())
    }
  }

  const handleClick = () => {
    if (inputDate === "date_not_human") {
      setInformation("date_not_human")
    } else if (inputDate === "") {
      setInformation("date_not_set")
    } else if (isNaN(inputDate)) {
      setInformation("date_not_valid")
    } else {
      setInformation(getResultAge(inputDate))
    }
  }

  return (
    <main>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <div className="known-age-wrapper">
          <div className="known-age-component">
            <div className="birth-date-input">
              <label htmlFor="birth-date">Enter Date of Birth</label>
              <DateField
                name="birth-date"
                onChange={handleInputDate}
                slotProps={{
                  textField: {
                    size: "small",
                    sx: {
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#e2e8f0" },
                        "&:hover fieldset": { borderColor: "#e2e8f0" },
                        "&.Mui-focused fieldset": { borderColor: "#e2e8f0" },
                      },
                      "& .MuiInputBase-input": {
                        color: "#e2e8f0",
                        "&:hover": { color: "#e2e8f0" },
                        "&:focus": { color: "#e2e8f0" },
                        textAlign: 'center',
                        fontWeight: '600'
                      },
                    },
                  },
                }}
              />
              <Button onClick={(handleClick)} variant="contained" >
                <span>
                  Search
                </span>
              </Button>
            </div>
          </div>
          <div className="known-age-result">
            {
              information === "" && <></>
            }
            {
              information === "date_not_human" && 
              <>
                <p className="known-age-result-invalid">Are you a vampire who has been alive all this time?</p>
              </>
            }
            {
              information === "date_not_set" && 
              <>
                <p className="known-age-result-invalid">Enter the date first to start the age calculating program!</p>
              </>
            }
            {
              information === "date_birth_not_valid" && 
              <>
                <p className="known-age-result-invalid">This program cannot calculate a date newer than the current date!</p>
              </>
            }
            {
              information === "date_not_valid" && 
              <>
                <p className="known-age-result-invalid">This program cannot calculate invalid dates!</p>
              </>
            }
            {
              information !== "" &&
              information !== "date_not_set" &&
              information !== "date_not_human" &&
              information !== "date_birth_not_valid" &&
              information !== "date_not_valid" &&
              <>
                <p className="known-age-result-information">{information[0].text_information}</p>
                <p className="known-age-result-time-information">{information[0].time_information}</p>
              </>
            }
          </div>
        </div>
      </LocalizationProvider>
    </main>
  )
}

export default Main
