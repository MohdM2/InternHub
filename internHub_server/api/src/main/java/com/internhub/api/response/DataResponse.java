package com.internhub.api.response;

public class DataResponse implements Response{
    private Object data;

    public Object getData() {
        return data;
    }

    public DataResponse(Object data) {
        this.data = data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
