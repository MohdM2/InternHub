package com.internhub.api.response;

public class AuthResponseWithData extends AuthResponse {

    private String type;

    private Object data;

    public AuthResponseWithData(String token, String type, Object data) {
        super(token);
        this.type = type;
        this.data = data;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
