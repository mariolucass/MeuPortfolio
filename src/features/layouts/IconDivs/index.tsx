import { motion } from "framer-motion";
import * as styled from "./styles";
import Icon from "../../../assets/myIcon.jpeg";
import { Avatar } from "@mui/material";

export const IconDivs = () => (
  <styled.DivIcon>
    <styled.QuinaryDiv>
      <styled.QuaternaryDiv>
        <styled.TertiaryDiv>
          <styled.SecondaryDiv>
            <styled.PrimaryDiv>
              <motion.div className="divIcon">
                <Avatar className="icon" src={Icon} />
              </motion.div>
            </styled.PrimaryDiv>
          </styled.SecondaryDiv>
        </styled.TertiaryDiv>
      </styled.QuaternaryDiv>
    </styled.QuinaryDiv>
  </styled.DivIcon>
);
