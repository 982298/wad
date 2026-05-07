FROM python:3.12-slim
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

# Expose port 80 for the application
EXPOSE 80

# Command to run the application on port 80
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]



///// Main.py


from fastapi import FastAPI

app = FastAPI()

itemList = [
    {"item_id": 1, "name": "Item 1", "description": "This is item 1"},
    {"item_id": 2, "name": "Item 2", "description": "This is item 2"},
    {"item_id": 3, "name": "Item 3", "description": "This is item 3"},
]

@app.get("/")
def root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    for item in itemList:
        if item["item_id"] == item_id:
            return item
    return {"message": "Item not found"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=80)




//// requirements.txt

fastapi
uvicorn
