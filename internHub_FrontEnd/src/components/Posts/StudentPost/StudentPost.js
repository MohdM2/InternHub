import "./StudentPost.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../Contexts/UserContext";
import { useSnackBar } from "../../../Contexts/SnackbarContext";
import axios from "axios";
export default function StudentPost({ data, respond }) {
  const navigate = useNavigate();
  const { user } = useUser();
  const { showSnackBar } = useSnackBar();
  async function acceptApplication(e) {
    e.stopPropagation();
    try {
      const response = await axios.put(
        `http://localhost:8080/applications/accept/${data.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      showSnackBar("Application accepted");
      respond();
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }
  async function rejectApplication(e) {
    e.stopPropagation();
    try {
      const response = await axios.put(
        `http://localhost:8080/applications/reject/${data.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      showSnackBar("Application rejected");
      respond();
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }
  return (
    <div
      className="post"
      onClick={() => navigate(`/studentprofile/${data.student.id}`)}
    >
      <div className="sti-post">
        <div className="sti-post-details">
          <h1 className="sti-header">{`${data.student.firstName} ${data.student.lastName}`}</h1>
          <span>{data.student.major}</span>
          <span>{data.student.university}</span>
          <span>{data.submissionDate}</span>
        </div>
        <hr style={{ width: "100%" }} />
        <div className="footer">
          {data.status !== "Accepted" ? (
            <span>
              <CheckCircleOutlineIcon style={{ color: "#1EA81B" }} />
              <input
                type="submit"
                value="Accept"
                className="accept"
                onClick={acceptApplication}
              />
            </span>
          ) : (
            ""
          )}
          {data.status !== "Rejected" ? (
            <span>
              <CancelIcon style={{ color: "red" }} />
              <input
                type="submit"
                value="Reject"
                className="reject"
                onClick={rejectApplication}
              />
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
