import React from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import CompanyInput from "./company-input"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { closestMatch } from "closest-match"
import companies from "../companies.json"

const style = {
  position: "absolute" as "absolute",
  top: { xs: "10%", sm: "50%" },
  left: { xs: "15%", sm: "50%" },
  transform: { xs: "translate(-10%, -5%)", sm: "translate(-50%, -50%)" },
  "max-width": 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

const IntroModal = ({ open, handleSubmit, persona, setPersona }) => {
  const [companyValue, setCompanyValue] = React.useState("")
  const [foundCompany, setFoundCompany] = React.useState("N/A")

  React.useEffect(() => {
    const setInitial = async () => {
      try {
        if (window.USER_IP) {
          fetch(`http://ipwho.is/${window.USER_IP}`)
            .then((res) => res.json())
            .then((data) => {
              const closest = closestMatch(data.connection.org, companies) || "N/A"
              setFoundCompany(Array.isArray(closest) ? closest[0] : closest)
            })
        }
      } catch (err) {}
    }
    setInitial()
  }, [])

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      // onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Grid container>
            <Grid item xs={12}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                nitish reddy Portfolio
              </Typography>
            </Grid>
            <Grid item xs={12} mt="1rem">
              <Typography id="transition-modal-description" variant="caption" display="block">
                This <strong>Resume/Portfolio site</strong> is driven by{" "}
                <strong>Anthropic's Claude AI</strong>. It is an AI that's sole{" "}
                <strong>job is to promote me</strong> and act as my 'hype-bot' in a conversational
                manner.
              </Typography>
              <Typography
                id="transition-modal-description"
                variant="caption"
                mt="1rem"
                display="block"
              >
                As it is a chat-bot you can <strong>add additional context</strong> if you'd like!
                Please fill out your job (if your comfortable). Hit start when ready!
              </Typography>
            </Grid>
            <Grid item xs={12} mt="4rem">
              <CompanyInput setCompanyValue={setCompanyValue} foundCompany={foundCompany} />
            </Grid>
            <Grid item xs={12} mt="2rem">
              <Typography mb="1rem" variant="body2">
                Persona/Job Profile:
              </Typography>
              <ToggleButtonGroup
                color="primary"
                value={persona}
                exclusive
                onChange={(evt, persona) => setPersona(persona)}
                aria-label="Platform"
              >
                <ToggleButton value="recruiter">Recruiter</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="flex-end" mt="4rem">
              {/* <Button
                onClick={() =>
                  handleSubmit({ message: companyValue, persona: persona || "recruiter" })
                }
              >
                Skip
              </Button> */}
              <Button
                variant="contained"
                fullWidth
                onClick={() =>
                  handleSubmit({ message: companyValue, persona: persona || "recruiter" })
                }
              >
                Start
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  )
}

export default IntroModal
