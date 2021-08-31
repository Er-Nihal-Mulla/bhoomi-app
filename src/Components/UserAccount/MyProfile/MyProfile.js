import React from "react";
import "./MyProfile.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    notchedOutline: {
        borderColor: "#C46404",
        borderWidth: 1,
        "&:hover": {
            borderColor: "#C46404",
            borderWidth: 2,
        },
    },
}));
const styles = {
    floatingLabelFocusStyle: {
        color: "#C46404",
    },
};
const currencies = [
    {
        value: "Adarsh Palm Retreat - Phase 1",
        label: "Adarsh Palm Retreat - Phase 1",
    },
];

export default function Profile() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState("EUR");
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <div className="container">
            <h1 style={{ paddingBottom: 20, marginTop: "5%", fontFamily: "Quicksand", }}>My Profile</h1>
            <h5 style={{ paddingBottom: 20, fontFamily: "Quicksand", }}>Account & Address Details</h5>

            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    style={{ width: "41ch", marginTop: "4%" }}
                    id="standard-basic"
                    label="Your Name"
                    InputLabelProps={{
                        style: {
                            color: "#C46404",
                        },
                    }}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                        },
                    }}
                    variant="outlined"
                />

                <TextField
                    style={{ width: "41ch", marginTop: "4%" }}
                    id="outlined-basic"
                    label="Your email Addres"
                    InputLabelProps={{
                        style: {
                            color: "#C46404",
                        },
                    }}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                        },
                    }}
                    variant="outlined"
                />
                <TextField
                    style={{ width: "41ch", marginTop: "4%" }}
                    id="outlined-basic"
                    label="Phone Number"
                    InputLabelProps={{
                        style: {
                            color: "#C46404",
                        },
                    }}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                        },
                    }}
                    variant="outlined"
                />
                <br />

                <TextField
                    style={{ width: "41ch", marginTop: "4%" }}
                    id="filled-select-currency"
                    select
                    label="Apartment Name"
                    value={currency}
                    onChange={handleChange}
                    InputLabelProps={{
                        style: {
                            color: "#C46404",
                        },
                    }}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                        },
                    }}
                    variant="outlined"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    style={{ width: "41ch", marginTop: "4%" }}
                    id="outlined-basic"
                    label="Door No"
                    InputLabelProps={{
                        style: {
                            color: "#C46404",
                        },
                    }}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                        },
                    }}
                    variant="outlined"
                />
                <TextField
                    style={{ width: "41ch", marginTop: "4%" }}
                    id="outlined-basic"
                    label="City"
                    InputLabelProps={{
                        style: {
                            color: "#C46404",
                        },
                    }}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                        },
                    }}
                    variant="outlined"
                />
                <br />
                <TextField
                    style={{ width: "41ch", marginTop: "4%" }}
                    id="outlined-basic"
                    label="State"
                    InputLabelProps={{
                        style: {
                            color: "#C46404",
                        },
                    }}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                        },
                    }}
                    variant="outlined"
                />
                <TextField
                    style={{ width: "41ch", marginTop: "4%" }}
                    id="outlined-basic"
                    label="Pin Code"
                    InputLabelProps={{
                        style: {
                            color: "#C46404",
                        },
                    }}
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline,
                        },
                    }}
                    variant="outlined"
                />

                <br />

                <Button
                    variant="black"
                    style={{
                        fontFamily: "Quicksand",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "18px",
                        lineHeight: "22px",
                        width: '8%',
                        marginTop: '4%',
                        textTransform: 'capitalize',
                    }}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#69C328",
                        color: "#fff",
                        borderRadius: "8px",
                        fontFamily: "Quicksand",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "18px",
                        lineHeight: "38px",
                        width: '16%',
                        marginTop: '4%',
                        textTransform: 'capitalize',
                    }}
                >
                    Save Changes
                </Button>
            </form>
        </div>
    );
}
