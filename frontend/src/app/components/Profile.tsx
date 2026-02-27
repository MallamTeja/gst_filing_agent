import { User, Mail, Phone, FileText, Hash, Edit2, LogOut, Check } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Profile() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("taxflow_user");
        navigate("/login");
    };

    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+91 9876543210",
        gstin: "22AAAAA0000A1Z5",
        invoiceNum: "INV-2024-001",
    });

    const handleSave = () => {
        setIsEditing(false);
        // Add actual save API call here
    };

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-[#8B4513]">User Profile</h1>
                <p className="text-muted-foreground">Manage your personal and GST information.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Personal Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 relative">
                            <Label htmlFor="name" className="flex items-center gap-2">
                                <User className="size-4" /> Name
                            </Label>
                            <Input
                                id="name"
                                value={user.name}
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                                readOnly={!isEditing}
                                className={!isEditing ? "bg-muted" : ""}
                            />
                            {!isEditing && (
                                <Button size="sm" variant="ghost" className="absolute right-0 top-0" onClick={() => setIsEditing(true)}>
                                    <Edit2 className="size-4 text-muted-foreground hover:text-foreground" />
                                </Button>
                            )}
                        </div>
                        <div className="space-y-2 relative">
                            <Label htmlFor="email" className="flex items-center gap-2">
                                <Mail className="size-4" /> Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                readOnly={!isEditing}
                                className={!isEditing ? "bg-muted" : ""}
                            />
                            {!isEditing && (
                                <Button size="sm" variant="ghost" className="absolute right-0 top-0" onClick={() => setIsEditing(true)}>
                                    <Edit2 className="size-4 text-muted-foreground hover:text-foreground" />
                                </Button>
                            )}
                        </div>
                        <div className="space-y-2 relative">
                            <Label htmlFor="phone" className="flex items-center gap-2">
                                <Phone className="size-4" /> Phone Number
                            </Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={user.phone}
                                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                readOnly={!isEditing}
                                className={!isEditing ? "bg-muted" : ""}
                            />
                            {!isEditing && (
                                <Button size="sm" variant="ghost" className="absolute right-0 top-0" onClick={() => setIsEditing(true)}>
                                    <Edit2 className="size-4 text-muted-foreground hover:text-foreground" />
                                </Button>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>GST Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4">
                        <div className="space-y-2 relative">
                            <Label htmlFor="gstin" className="flex items-center gap-2">
                                <FileText className="size-4" /> GSTIN
                            </Label>
                            <Input
                                id="gstin"
                                value={user.gstin}
                                onChange={(e) => setUser({ ...user, gstin: e.target.value })}
                                readOnly={!isEditing}
                                className={!isEditing ? "bg-muted" : ""}
                            />
                            {!isEditing && (
                                <Button size="sm" variant="ghost" className="absolute right-0 top-0" onClick={() => setIsEditing(true)}>
                                    <Edit2 className="size-4 text-muted-foreground hover:text-foreground" />
                                </Button>
                            )}
                        </div>
                        <div className="space-y-2 relative">
                            <Label htmlFor="invoiceNum" className="flex items-center gap-2">
                                <Hash className="size-4" /> Invoice Number
                            </Label>
                            <Input
                                id="invoiceNum"
                                value={user.invoiceNum}
                                onChange={(e) => setUser({ ...user, invoiceNum: e.target.value })}
                                readOnly={!isEditing}
                                className={!isEditing ? "bg-muted" : ""}
                            />
                            {!isEditing && (
                                <Button size="sm" variant="ghost" className="absolute right-0 top-0" onClick={() => setIsEditing(true)}>
                                    <Edit2 className="size-4 text-muted-foreground hover:text-foreground" />
                                </Button>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-between items-center mt-8">
                <Button
                    variant="outline"
                    className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                    onClick={handleLogout}
                >
                    <LogOut className="size-4 mr-2" />
                    Logout
                </Button>
                <Button
                    className="bg-[#8B4513] hover:bg-[#A0522D] text-white"
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                >
                    {isEditing ? (
                        <>
                            <Check className="size-4 mr-2" />
                            Save Profile
                        </>
                    ) : (
                        <>
                            <Edit2 className="size-4 mr-2" />
                            Edit Profile
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}