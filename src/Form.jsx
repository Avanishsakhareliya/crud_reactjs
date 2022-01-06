import React, { useState } from "react";
import $ from 'jquery';
import './App.css';

function Form() {
    let hobby = [{ id: 0, label: "cricket", value: false },
    { id: 1, label: "reading", value: false },
    { id: 2, label: "dancing", value: false }]

    // const [oop, setoop] = useState([]);
    const [narr, setnarr] = useState([])
    const [arr, setarr] = useState(
        {
            fname: '',
            lname: '',
            email: '',
            gender: '',
            city: '',
            option: []
        }
    );

    const
        handlefname = (e) => {
            var name = e.target.name
            var value = e.target.value

            setarr({ ...arr, [name]: value });
            // console.log("setarr",setarr);
            postdata();
        }

    function handledeletedata(index) {
        console.log("deltede");

        alert("delted row")

        narr.splice(index, 1);
        setarr(narr);

    }
    const onHobby = (e) => {
        let arry = arr.option;
        if (e.target.checked) {
            // console.log(e.target);
            arry.push(e.target.name)
        }
        setarr({ option: arry })
        console.log("option array", arry);
        return arry
    }

    function handleupdatedata(index) {
        let show = narr[index]
        console.log(show.fname);

        setarr({
            fname: show.fname,
            lname: show.lname,
            email: show.email,
            city: show.city
        })
        if (show.gender === "male") {
            document.getElementById("male").checked = true
        }

        else {
            document.getElementById("female").checked = true
        }

        console.log(show.option);



        for (let i = 0; i < show.option.length; i++) {
            console.log(show.option);
            if (show.option[i] === "cricket") {
                document.getElementById('cricket').checked = true;
                console.log(show.option[i]);

            }
            else if (show.option[i] === "reading") {

                document.getElementById('reading').checked = true;
                console.log(show.option[i]);


            } else if (show.option[i] === "dancing") {
                document.getElementById('dancing').checked = true;
                console.log(show.option[i]);

            }

        }
        console.log("show data", show)
        let index1 = narr.indexOf(show.fname)
        narr.splice(index1, 1);
        setarr(narr)


    }

    function searching() {
        $(document).ready(function () {
            $("#iner").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                $("#root tr").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        });

    }


    function postdata(e) {
        e.preventDefault();

        let obj = {
            fname: e.target.fname.value,
            lname: e.target.lname.value,
            email: e.target.email.value,
            gender: e.target.gender.value,
            city: e.target.city.value,
            option: arr.option

        }
        // narr.push(obj);
        setnarr(narr)
        setarr({
            fname: "",
            lname: "",
            email: "",
            city: "",
            option: []

        })

        hobby.map((val) => {
            return document.getElementById(val.label).checked = false;
        })
        document.getElementById("male").checked = false
        document.getElementById("female").checked = false
        console.log("narray", narr);

        if (obj.fname === "") {
            return document.getElementById("fn").innerHTML = " *enter your first name !!"
            // console.log("fname ", fname);
        } else if (obj.lname === "") {
            return document.getElementById("ln").innerHTML = " *enter your last name !!"
            // console.log("la ", lname);

        }
        else if (obj.email === "") {
            return document.getElementById("em").innerHTML = "* enter your email !!"
            // console.log("ema ", ename);

        }
        else if (obj.city === "") {
            return document.getElementById("ci").innerHTML = " *enter your city !!"
            // console.log("ema ", ename);

        }
        narr.push(obj);
    }

    return (
        <>
            <center>

                <div className="container"  >
                    <form action="/" name="forms" onSubmit={(e) => postdata(e)}>

                        <label >First name:</label><br />
                        <input type="text" id="fname" name="fname" placeholder="enter your fname" onChange={handlefname} value={arr.fname} /><br /><span id="fn" ></span><br /><br />
                        <label >Last name:</label><br />
                        <input type="text" id="lname" name="lname" placeholder="enter your lname" onChange={handlefname} value={arr.lname} /><br /><span id="ln"></span><br /><br />
                        <label >email:</label><br />
                        <input type="text" id="email" name="email" placeholder="enter your email" onChange={handlefname} value={arr.email} /><br /><span id="em"></span><br /><br />
                        <div onChange={handlefname}>
                            <label>select your gender :</label><br /><br />
                            <input type="radio" id="male" name="gender" value="male" />
                            <label >Male</label><br />
                            <input type="radio" id="female" name="gender" value="female" />
                            <label>female</label><br /> <span id="gn"></span><br />
                        </div>
                        <br />
                        <label >Choose city:</label><br />
                        <select name="city" id="city" onChange={handlefname} value={arr.city}>

                            <option >surat</option>
                            <option >gandhinagar</option>
                            <option >vadodara</option>
                            <option >jamnagar</option>
                        </select>
                        <br /><span id="ci"></span><br />
                        <label>Hobby : </label><br /><br />

                        {console.log(hobby.length)}
                        {
                            hobby.length > 0 ?
                                hobby.map((val, id) => {
                                    return (<div>
                                        <input type="checkbox"
                                            id={val.label}
                                            name={val.label}
                                            className="hob"
                                            value={hobby[id].value}
                                            onChange={onHobby}

                                        />
                                        <label >{val.label}</label><br />
                                    </div>);
                                }) : null

                        }

                        <button id="submit" >submit</button>

                    </form>
                </div >
                <br /><br />

                <div className="input-group">
                    <input type="search" id="iner" className="form-control rounded" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                    <button type="button" className="btn btn-outline-primary" id="search" onClick={searching}>search</button>
                </div>



                <br /><br /><br />
                <table border="1">
                    <thead>
                        <tr>
                            <th>no.</th>
                            <th>fname</th>
                            <th>lname</th>
                            <th>email</th>
                            <th>gender</th>
                            <th>city</th>
                            <th>hobby</th>
                            <th>action</th>


                        </tr>
                    </thead>

                    {<tbody>
                        {
                            narr.map((val, index) => {
                                // console.log("valuieee", val);
                                // console.log("hobby label",hobby);

                                let tt = <tr>
                                    <td>{index + 1}</td>
                                    <td>{val.fname}</td>
                                    <td>{val.lname}</td>
                                    <td>{val.email}</td>
                                    <td>{val.gender}</td>
                                    <td>{val.city}</td>
                                    <td>{val.option}</td>

                                    <td><button onClick={() => handledeletedata(index)}>delete</button><button onClick={() => handleupdatedata(index)}>update</button></td>

                                </tr>
                                return tt;
                            })


                        }


                    </tbody>}

                </table>

            </center>
        </>

    )

}

export default Form;
