import { useRouter } from "next/router";
export default function()
{
    const router  = useRouter();
    const {slug } = router.query;
    return<h1>{slug}</h1>
}