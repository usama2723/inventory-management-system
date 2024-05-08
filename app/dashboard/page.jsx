import { AspectRatio } from "@/components/ui/aspect-ratio"
import TopNavigatiopn from "@/components/TopNavigatiopn";
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { prisma } from "@/prisma/lib/prisma";

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]

export default function Dashboard() {

    prisma.user.create({
        data:{
            
        }
    })

    return (
        <div className="container mx-auto space-y-10">
            <TopNavigatiopn />
           
                <div>
                <h1 className="text-2xl font-bold">Search a Product</h1>
                <Input
                    className="bg-white border border-black mt-4"
                    type="search"
                    id="search"
                    placeholder="Search"
                />
                </div>
                   
            
            <AspectRatio ratio={16 / 5} className="bg-muted rounded-lg mt-16">
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Add a Product</h1>
                    <div className="space-y-2 mt-5">
                        <Label htmlFor="email">Product Slug</Label>
                        <Input
                            className="bg-white border border-black"
                            type="text"
                            id="text"
                        // placeholder="Password"
                        />
                        <Label htmlFor="email">Quantity</Label>
                        <Input
                            className="bg-white border border-black"
                            type="number"
                            id="number"
                        // placeholder="Password"
                        />
                        <Label htmlFor="email">Price</Label>
                        <Input
                            className="bg-white border border-black"
                            type="price"
                            id="price"
                        // placeholder="Password"
                        />
                    </div>
                    <Button
                        type="submit"
                        className=" mt-6 rounded-lg bg-indigo-600 hover:bg-indigo-70"
                    >
                        Add a Product
                    </Button>

                </div>

            </AspectRatio>

            <AspectRatio ratio={16 / 5.5} className="bg-muted rounded-lg mt-6">
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Display Current Stock</h1>
                    <div className="space-y-2 mt-5">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead >Product Name</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead className="text-right">Price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.invoice}>
                                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                        <TableCell>{invoice.paymentStatus}</TableCell>
                                        <TableCell>{invoice.paymentMethod}</TableCell>
                                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell className="text-right">$2,500.00</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
              
                </div>

            </AspectRatio>
        </div>
    );
}
