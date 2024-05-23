import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Grid,
  Typography,
  FormControlLabel,
  Switch,
  Container,
  Paper,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Input = styled("input")({
  display: "none",
});

const memberGroups = [
  { value: "group1", label: "Group 1" },
  { value: "group2", label: "Group 2" },
  { value: "group3", label: "Group 3" },
];

const handlers = [
  { value: "handler1", label: "Handler 1" },
  { value: "handler2", label: "Handler 2" },
  { value: "handler3", label: "Handler 3" },
];

const genders = [
  { value: "male", label: "남성" },
  { value: "female", label: "여성" },
];

export default function MemberCreate() {
  const [showPhoto, setShowPhoto] = useState(true);

  return (
    <Container maxWidth="xl">
      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          회원가입
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box
                  sx={{
                    width: { xs: 200, sm: 250, md: 300, lg: 350, xl: 400 },
                    height: { xs: 200, sm: 250, md: 300, lg: 350, xl: 400 },
                    maxWidth: "100%",
                    maxHeight: "100%",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Typography>사진 미리보기</Typography>
                </Box>
                <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                  <Input accept="image/*" id="upload-photo" type="file" />
                  <label htmlFor="upload-photo">
                    <Button
                      variant="contained"
                      component="span"
                      startIcon={<PhotoCamera />}
                      sx={{ mr: 2 }}
                    >
                      촬영
                    </Button>
                  </label>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showPhoto}
                        onChange={() => setShowPhoto(!showPhoto)}
                        name="showPhoto"
                        color="primary"
                      />
                    }
                    label={showPhoto ? "노출" : "비노출"}
                  />
                </Box>
                <Box display="flex" alignItems="center">
                  <label htmlFor="edit-photo">
                    <Button
                      variant="contained"
                      component="span"
                      startIcon={<EditIcon />}
                      sx={{ mr: 2 }}
                    >
                      수정
                    </Button>
                  </label>
                  <label htmlFor="delete-photo">
                    <Button
                      variant="contained"
                      component="span"
                      startIcon={<DeleteIcon />}
                    >
                      삭제
                    </Button>
                  </label>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="이름"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="전화번호"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    required
                    id="memberId"
                    name="memberId"
                    label="회원번호"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="주소"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    required
                    id="lockerNumber"
                    name="lockerNumber"
                    label="락커번호"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    select
                    id="memberGroup"
                    name="memberGroup"
                    label="회원그룹"
                    fullWidth
                  >
                    {memberGroups.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    select
                    id="handler"
                    name="handler"
                    label="담당자"
                    fullWidth
                  >
                    {handlers.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    required
                    id="height"
                    name="height"
                    label="신장(cm)"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    required
                    id="weight"
                    name="weight"
                    label="체중(kg)"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    required
                    id="bmi"
                    name="bmi"
                    label="체질량지수"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    select
                    id="gender"
                    name="gender"
                    label="성별"
                    fullWidth
                  >
                    {genders.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    회원가입
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
