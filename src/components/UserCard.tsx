import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import type { User } from '../services/userService'
import Box from '@mui/material/Box'

function initials(name: string) {
    return name.split(' ').slice(0, 2).map((p) => p[0]).join('').toUpperCase()
}
type UserCardProps = {
    user: User
    onEdit: (user: User) => void
    onDelete: (user: User) => void
}
export function UserCard({ user, onEdit, onDelete }: UserCardProps) {
    return (
        <Card>
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Avatar
                    sx={{
                        bgcolor:"#ffffff",
                        width: 72,
                        height: 72,
                        fontSize: 24,
                        mb: 2,
                    }}
                >
                    {initials(user.name)}
                </Avatar>
                <Typography variant="subtitle1">{user.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    @{user.username}
                </Typography>
                <Typography variant="body2" sx={{ color: "#1976d2" }}>{user.email}</Typography>

                <Box sx={{ mt: 1 }}>
                    <IconButton
                        aria-label={`Editar ${user.name}`}
                        onClick={() => onEdit(user)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        aria-label={`Eliminar ${user.name}`}
                        color="error"
                        onClick={() => onDelete(user)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    )
}