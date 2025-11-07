const API_BASE = process.env.REACT_APP_API_BASE || ""

async function handleResponse(res) {
    const data = await res.json().catch(() => ({}))
    if(!res.ok){
        const err = new Error(data?.error || res.statusText || "API error")
        err.status = res.status
        err.data = data
        throw err
    }
    return data
}

export async function fetchProducts() {
    const res = await fetch(`${API_BASE}/api/products`)
    return handleResponse(res)
}

export async function fetchCart() {
    const res = await fetch(`${API_BASE}/api/cart`)
    return handleResponse(res)   
}

export async function addOrUpdateCart(productId, qty) {
    const res = await fetch(`${API_BASE}/api/cart`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, qty })
    })
    return handleResponse(res)
}

export async function removeFromCart(productId) {
    const res = await fetch(`${API_BASE}/api/cart/${encodeURIComponent(productId)}`, {
        method: "DELETE",
    })   
    return handleResponse(res)
}

export async function checkout(payload) {
    const res = await fetch(`${API_BASE}/api/checkout`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( payload )
    })
    return handleResponse(res)
}